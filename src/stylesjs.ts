interface Stylesjs {
   readonly buttons : {
    readonly menuActive : string,
    readonly menuUnactive : string,
    spanMenuActive : string,
    spanMenuUnactive : string
    }
}

const stylesjs:Stylesjs = {
    buttons : {
        menuUnactive : 'w-52 py-4 text-white d-flex items-center justify-center hover:bg-sky-700 group rounded-t-lg hover:bg-white',
        menuActive : 'w-52 py-4  d-flex items-center justify-center group bg-white rounded-t-lg',
        spanMenuActive: "font-medium text-lg text-redProject",
        spanMenuUnactive : "font-medium text-lg text-white "
    }
}

export default stylesjs