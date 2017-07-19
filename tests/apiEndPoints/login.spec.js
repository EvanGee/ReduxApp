import axios from "axios"
import db from "../../db/models"

describe("login", () => {
    it("it should find the user 'evan77' in the database and return true", () => {
        axios.post("localhost:3000/api/login", {"username": "evan77", "password": "password"})
        .then((res) => {
           // console.log("/n***no errors***/n")
            done()
        })
        .catch((err) => {
            //console.log(err)
           // console.log("***errors***")
            throw new Error(err)
        })
    })

})