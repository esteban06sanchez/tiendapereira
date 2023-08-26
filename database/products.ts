interface SeedProduct {
    descripcion: string;
    images: string[];
    stock: number;
    precio: number;
    tallas: ValidSizes[];
    slug: string;
    etiquetas: string[];
    titulo: string;
    tipo: ValidTypes;
    genero: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'camisas'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            descripcion: "Nueva piel matecaña.",
            images: [
                'pereira1.jpg',
                'pereira2.jpg',
            ],
            stock: 7,
            precio: 75,
            tallas: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            tipo: 'camisas',
            etiquetas: ['sweatshirt'],
            titulo: "Nueva piel matecaña",
            genero: 'men'
        },
        {
            descripcion: "Camisa Alternativa.",
            images: [
                'pereira3.jpg',
                'pereira4.jpg',
            ],
            stock: 5,
            precio: 200,
            tallas: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            tipo: 'camisas',
            etiquetas: ['jacket'],
            titulo: "Camisa Alternativa",
            genero: 'men'
        },
        
        {
            descripcion: "Nuestro camino en libertadores.",
            images:[
                'pereira8.png',
                'pereira7.png'
            ],
            stock: 10,
            precio: 130,
            tallas: ['S','M','L','XL','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            tipo: 'camisas',
            etiquetas: ['shirt'],
            titulo: "Nuestro camino en libertadores.",
            genero: 'men'
        },

        {
            descripcion: "Vamos Campeon.",
            images: [
                'pereira5.png',
            ],
            stock: 50,
            precio: 45,
            tallas: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            tipo: 'camisas',
            etiquetas: ['shirt'],
            titulo: "Vamos Campeon.",
            genero: 'men'
        },
        {
            descripcion: "Herederos de esta pasion.",
            images: [
                'pereira6.png'
            ],
            stock: 50,
            precio: 40,
            tallas: ['M','L','XL','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            tipo: 'camisas',
            etiquetas: ['shirt'],
            titulo: "Herederos de esta pasion.",
            genero: 'men'
        }
    ]
}