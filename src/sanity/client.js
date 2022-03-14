import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "o6h6lf6t", // find this at manage.sanity.io or in your sanity.json
  dataset: "videodata", // this is from those question during 'sanity init'
});