module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define("Inventory", {
        productName: DataTypes.STRING,
        currentQuantity: DataTypes.INTEGER,
        weeklyQuantity: DataTypes.INTEGER,
        price: DataTypes.FLOAT(4, 2),
        imageURL: DataTypes.STRING
    });
    return Inventory;
};