const mongoose =require(`mongoose`);

mongoose.connect(`mongodb://localhost/project_manager`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`mongodb connection established`))
    .catch((err) => console.log(`db connection unsuccessful`, err))