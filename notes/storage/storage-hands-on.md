# GSP074 - Cloud Storage: Qwik Start - CLI/SDK

gsutil mb gs://YOUR-BUCKET-NAME/
wget --output-document ada.jpg https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg
gsutil cp ada.jpg gs://YOUR-BUCKET-NAME
rm ada.jpg
