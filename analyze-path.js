import express from 'express';
import { ClarifaiStub, grpc } from "clarifai-nodejs-grpc";

const stub = ClarifaiStub.grpc();
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//generate index numbers for semi-random returned theme array
const createIndex = (rangeLow, rangeHigh) => {
  return Math.floor(Math.random() * (rangeHigh - rangeLow + 1) ) + rangeLow;
}


// main image analysis function
//receive json request from frontend, {"url": "urladdress"}
app.post('/analyze', (req, res) => {
  const { url } = req.body;
  console.log(url);

  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Key {YOUR_CLARIFAI_API_KEY}");

  stub.PostModelOutputs(
    {
        //model id - general image categorization
        model_id: "{YOUR_CLARIFAI_GENERAL_VISUAL_CLASSIFIER_MODEL_ID}",
        inputs: [
            {data: {image: {url: url }}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }
        const output = response.outputs[0];
        const resultsArray = [];

        //array indexes will be randomly selected certain numbers
        let lowNum = 1;
        let highNum = 2;

        // increase difference in values
        let valueBroaden = 1.03;

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
        resultsArray.push({
          concept: output.data.concepts[0].name,
          value: output.data.concepts[0].value
        })
        for(let i=0; i <=3; i++) {
          resultsArray.push({
            concept: output.data.concepts[createIndex(lowNum, highNum)].name,
            value: output.data.concepts[createIndex(lowNum, highNum)].value / valueBroaden
          })
          lowNum += 2;
          highNum += 2;
          valueBroaden += 0.03;
        }
        console.log(resultsArray);
        res.json(resultsArray);
    }
  );
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`- - - - running on port ${process.env.PORT} - - - -`);
})
