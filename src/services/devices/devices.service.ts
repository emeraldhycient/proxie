import axiosClient from "../../helpers/apiClient";


interface IDeviceAdd {
    slug: string,
    name: string,
    theme: string,
    icon: string,
    pass_key: string
}

class DevicesService {
    addDevice = async ({ slug, name, theme, icon, pass_key }: IDeviceAdd) => {
        await axiosClient.post("/devices/", { slug, name, theme, icon, pass_key })
    }
}