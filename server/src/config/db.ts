import { Sequelize } from "sequelize";

const db=new Sequelize('postgresql://products_9pxu_user:s91BrMaTrAH4ZaAUXPT0hAvbum3jDsqb@dpg-da95k3942hec73eq4qc0-a.oregon-postgres.render.com/products_9pxu?ssl=true')

export default db