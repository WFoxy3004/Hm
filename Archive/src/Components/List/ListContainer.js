import { connect } from "react-redux"
import List from "./List"

const mapStateToProps = (state) => ({
    products: state.products.list,
    searchStatus: state.products.searchStatus,
    searchArr: state.products.searchArr
})

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(List)