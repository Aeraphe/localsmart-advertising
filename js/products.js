
const defaultPath = "../../assets/photos/";
export const products = [

    {

        name: 'iPhone 12',
        state: '(Usado)',
        price: 'R$15.00,00',
        sell: true,
        imagFolder: defaultPath,
        images: {
            1: { path: 'teste.jfif' },
            2: { path: 'iphone13.jfif' }
        },
        props: {
            fild1: [
                { name: "Modelo", value: "ProMax" },
                { name: "Bateria", value: "90%" }
            ],
            fild2: [
                { name: "Memoria", value: "64G" },
                { name: "Câmera", value: "4" }
            ],
        }
    },

    {

        name: 'iPhone 11',
        state: '(Novo)',
        price: 'R$11.00,00',
        sell: false,
        imagFolder: defaultPath,
        images: {
            1: { path: 'iphone13.jfif' },
            2: { path: 'iphone12.jpg' }
        },
        props: {
            fild1: [
                { name: "Modelo", value: "Pro" },
                { name: "Condição", value: "Usado" }
            ],
            fild2: [
                { name: "Modelo", value: "ProMax" },
                { name: "Condição", value: "Usado" }
            ],
        }
    }

]








