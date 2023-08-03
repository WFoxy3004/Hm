import { connect } from 'react-redux';
import { updateSearch, startSearch } from '../../redux/productsReducer';
import Search from './Search';

const mapStateToProps = (state) => ({ 
    searchText: state.products.searchText
}) 

const mapDispatchToProps = { 
    updateSearch,
    startSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)