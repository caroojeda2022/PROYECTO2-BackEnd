const insertNoteQuery = require('../../db/noteQueries/insertNoteQuery');

const newNote = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            const err = new Error('Faltan campos');
            err.statusCode = 400;
            throw err;
        }

        await insertNoteQuery(note);

        res.send({
            status: 'ok',
            message: 'Nota agregada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newNote;
