const { default: FooterComponent } = require("@/components/ui/Footer")
const { default: Header } = require("@/components/ui/Header")



const NormalLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <FooterComponent />
        </div>
    )

}


export default NormalLayout