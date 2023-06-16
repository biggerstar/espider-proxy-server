
const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('meituan_medical', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const Recruit = sequelize.define("mt_waimai_medical", {
    // id: {
    //     primaryKey:true,
    //     type:DataTypes.STRING
    // },
    sid: {
        primaryKey:true,
        type:DataTypes.STRING
    },
    shop: DataTypes.STRING,
    name: DataTypes.STRING,
    month_saled: DataTypes.STRING,
    origin_price: DataTypes.STRING,
    price: DataTypes.STRING,
    picture: DataTypes.STRING
});
Recruit.sync()

module.exports = {
    Recruit
}
