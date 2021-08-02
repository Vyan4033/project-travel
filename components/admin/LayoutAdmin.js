//@ts-check

import Sidebar from '../../components/admin/SidebarAdmin'

const Layout = ({children}) => {
    return(
        <div>
            <Sidebar>
                {children}
            </Sidebar>
        </div>
    )
}

export default Layout