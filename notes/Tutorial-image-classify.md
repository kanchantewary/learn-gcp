# Classify Images with Pre-built ML Models using Cloud Vision API and AutoML

```
export API_KEY=<YOUR_API_KEY>
echo $API_KEY

gsutil acl ch -u AllUsers:R gs://<YOUR-BUCKET>/*


request.json

{
  "requests": [
      {
        "image": {
          "source": {
              "gcsImageUri": "gs://my-bucket-name/cirrus.png"
          }
        },
        "features": [
          {
            "type": "LABEL_DETECTION",
            "maxResults": 10
          }
        ]
      }
  ]
}


curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json  https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}
