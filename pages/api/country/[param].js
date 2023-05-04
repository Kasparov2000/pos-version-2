import {Countries} from "../../../lib/utils/Countries/API/CountriesClass";


export default async function handler(req, res) {
    res.json(Countries.findCountryByName(req.query.param))
}