import {sql} from "../database/database.js";

const getSomeDBEntries = async () => {
    return await sql `SELECT TOP 10 * FROM Journeys`;
};

export { getSomeDBEntries };