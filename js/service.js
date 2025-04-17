import { DESERT_URL, PAPADIAS_URL, PIZZA_URL } from "./config.js";

  const getAllPizzas = async () => {
    try {
        const res = await fetch(PIZZA_URL.GET)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }
  const getPizzaByID = async (id) => {
    try {
        const res = await fetch(`${PIZZA_URL.GET}/${id}`)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }
  const getAllPapadias = async () => {
    try {
        const res = await fetch(PAPADIAS_URL.GET)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }
  const getPapadiaByID = async (id) => {
    try {
        const res = await fetch(`${PAPADIAS_URL.GET}/${id}`)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }

  const getAllDesert = async () => {
    try {
        const res = await fetch(DESERT_URL.GET)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }

  const getDesertByID = async (id) => {
    try {
        const res = await fetch(`${DESERT_URL.GET}/${id}`)
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        const data = await res.json()
        return data 

    } catch (error) {
        console.log(error.message);
        
    }
  }

  const postNewPizza = async (pizza) => {
    try {
        const res = await fetch(`${PIZZA_URL.POST}`,{
            method:"POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(pizza)
        } )
        if (!res.ok) {
            throw new Error (`POST emeliyyatinda xeta bas verdi. Status: ${res.status}`)
        }
        return res
    } catch (error) {
        console.log(error.message);
        
    }
  }
  const editPizza = async (pizza, id) => {
    try {
        const res = await fetch(`${PIZZA_URL.PUT}/${id}`,{
            method:"PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(pizza)
        } )
        if (!res.ok) {
            throw new Error (`POST emeliyyatinda xeta bas verdi. Status: ${res.status}`)
        }
        return res
    } catch (error) {
        console.log(error.message);
        
    }
  }

  const deletePizzaByID = async (id) => {
    try {
        const res = await fetch(`${PIZZA_URL.DELETE}/${id}`, {
            method: "DELETE"
        })
        if(!res.ok) {
            throw new Error(`request xetasi: xeta bas verdi,status: ${res.status}`)
        }
        return true; 

    } catch (error) {
        console.log("Delete xətası:",error.message);
        
    }
  }

  export {
    getAllPizzas,
    getPizzaByID,
    getAllPapadias,
    getPapadiaByID,
    postNewPizza,
    deletePizzaByID,
    editPizza,
    getAllDesert,
    getDesertByID
  }