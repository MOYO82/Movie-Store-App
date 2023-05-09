exports.deleteThing = (req, res, next) => {
    (file) => {
        res.status(404).json({
            error: new Error('document not founs!')
        });
    }
    if (file.userId !== req.auth.userId) {
        res.status(400).json({
            error: new Error('Invalid request!')
        });
    }
    file.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                meassage: 'File deleted!'
            });
        }
    ).catch(
        (error) =>{
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getItem = (req, res, next) => {
    file.find().then(
        (files) => {
            res.status(200).json(files);
        }
    )
}