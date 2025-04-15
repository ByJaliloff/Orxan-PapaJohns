import { getAllPizzas, getAllPapadias, postNewPizza, deletePizzaByID, editPizza } from "./service.js";

const inputs = document.querySelectorAll('#inputs input')

let data =[]
let diasData =[]
 async function getPizzs() {
    data = await getAllPizzas()
    console.log(data);
    printPizzas()
    
}
getPizzs()


function printPizzas() {
    data.forEach(element => {
        document.getElementById('pizzas').innerHTML += `
                    <div id="${element.id}" class="bg-white shadow rounded p-3 w-72 h-[450px] border-2 border-gray-200 flex flex-col justify-between items-center">
                        <img src="${element.img}" alt="${element.name}" class="w-full h-50 object-cover mb-2 rounded">
                        <h3 class="font-semibold text-[24px] text-center">${element.title}</h3>
                        <p class="text-gray-600 text-[16px] mb-2 text-center">${element.composition}</p>
                        <span class="text-black font-semibold text-center text-[18px]">${element.price} ₼</span>
                        <div class="flex">
                        <button  onclick="handleDelete('${element.id}')" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 deleteBtn">Delete</button>
                        <button onclick="showInps('${element.id}')" type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                        </div>
                    </div>`
    });
}

async function getPapadias() {
    diasData = await getAllPapadias()
    console.log(data);
    printPapadias()
    
}
getPapadias()

function printPapadias() {
    diasData.forEach(element => {
        document.getElementById('papadias').innerHTML += `
            <div class="bg-white shadow rounded p-4">
              <img src="${element.img}" alt="${element.title}" class="w-full h-40 object-cover mb-2 rounded">
              <h3 class="font-bold text-lg">${element.title}</h3>
              <p class="text-gray-600 text-sm mb-2">${element.composition}</p>
              <div class="flex justify-between items-center">
            <span class="text-red-600 font-semibold">Qiymət: ${element.price} ₼</span>
            <button class="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">
        Bunu Seç
      </button>
    </div>
    </div>`
    })
}


window.handleDelete = async function (id) {
  Swal.fire({
    title: "Əminsiniz?",
    text: "Bu əməliyyatı geri qaytarmaq mümkün olmayacaq!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Bəli, sil!",
    cancelButtonText: "İmtina et"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const success = await deletePizzaByID(id);
      if (success) {
        Swal.fire({
          title: "Silindi!",
          text: "Fayl uğurla silindi.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        Swal.fire({
          title: "Xəta!",
          text: "Silinmə zamanı xəta baş verdi.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000
        });
      }
    }
  });
}

function getValues() {
    const newPizza = {
        img: inputs[0].value,
        category: inputs[1].value,
        title: inputs[2].value,
        composition: inputs[3].value,
        price: inputs[4].value
    }
    return newPizza
}

window.handlePost = async function() {
    const newPizza = getValues();
    console.log(newPizza);
  
    const success = await postNewPizza(newPizza);
  
    if (success) {
      setTimeout(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Pizzanız uğurla əlavə olundu!",
          showConfirmButton: false,
          timer: 3000
        });
      }, 300);
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Əlavə edilərkən xəta baş verdi!",
        showConfirmButton: false,
        timer: 3000
      });
    }
  }
  
  
let globId
window.showInps = function (id) {
    console.log(id);
    console.log(data);
    
    
    const element = data.find(item => item.id == id) 
    globId = id
    if (element) {
      inputs[0].value = element.img
      inputs[1].value = element.category
      inputs[2].value = element.title
      inputs[3].value = element.composition
      inputs[4].value = element.price
    } else {
      console.log("Element tapılmadı!")
    }
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    })
  }
  
  window.handleEdit = function() {
    Swal.fire({
      title: "Dəyişiklikləri saxlamaq istəyirsiniz?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Saxla",
      denyButtonText: "Saxlamıram"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newPizza = getValues(); 
        await editPizza(newPizza, globId);
        
        Swal.fire({
          title: "Saxlanıldı!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });        
        setTimeout(() => {
          location.reload();
        }, 2000);
  
      } else if (result.isDenied) {
        Swal.fire("Dəyişikliklər saxlanılmadı", "", "info");
      }
    });
  };
  
  