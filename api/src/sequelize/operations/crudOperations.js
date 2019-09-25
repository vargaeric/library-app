const crudOperations = (Model) => {
    return {
        findAll: () =>
            Model
                .findAll()
                .then(all => {
                    newAll = all.map(one => one.dataValues);
                    return newAll;
                }),

        create: (args) =>
            Model
                .create(args)
                .then(({ dataValues }) => {
                    return dataValues;
                }),

        edit: ({ id, ...columnsToEdit }) =>
            Model
                .findOne({ where: { id } })
                .then(({ dataValues }) => 
                    Model
                        .update(columnsToEdit, { where: { id } })
                        .then(() => {
                            return {...dataValues, ...columnsToEdit};
                        })
                ),

        remove: ({ id }) =>
            Model
                .findOne({ where: { id } })
                .then(({ dataValues }) =>
                    Model
                    .destroy({ where: { id } })
                    .then(() => {
                        return dataValues;
                    })
                ),
    }
}

module.exports = crudOperations;
