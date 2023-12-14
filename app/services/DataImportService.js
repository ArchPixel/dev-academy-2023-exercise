import {sql} from "../database/database.js";

const getSomeDBEntries = async () => {
    return await sql `SELECT * FROM Journeys LIMIT 10`;
};

export { getSomeDBEntries };