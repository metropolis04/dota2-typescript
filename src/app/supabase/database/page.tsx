import { ContainerComponent } from "@/app/components/ContainerComponent"
import { RegisterFormComponent } from "./components/RegisterFormComponent"

export default async function DatabasePage() {

    return (
        <div>
            <ContainerComponent >
                <RegisterFormComponent />
            </ContainerComponent>
        </div>
    )
}