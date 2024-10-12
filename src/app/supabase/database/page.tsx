import { ContainerComponent } from "@/app/components/ContainerComponent"
import { RegisterFormComponent } from "./components/RegisterFormComponent"
import GetUserPostsComponent from "./components/GetUserPostsComponent"

export default async function DatabasePage() {

    return (
        <div>
            <ContainerComponent >
                <RegisterFormComponent />
                <GetUserPostsComponent />
            </ContainerComponent>
        </div>
    )
}