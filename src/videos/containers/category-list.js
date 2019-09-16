import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import CategoryLayout from '../components/category-list-layout';
import Empty from '../components/empty';
import SeparatorHorizontal from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  /* debugger; */
  return {
    list: state.categoriesList, //Lo recibo de un state global en vez de un componente superior
  };
};

/* function mapStateToProps(state) {
  debugger;
} */

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>;
  itemSepartor = () => <SeparatorHorizontal color="red" />;
  rendItem = ({item}) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <CategoryLayout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSepartor}
          renderItem={this.rendItem}
        />
      </CategoryLayout>
    );
  }
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(CategoryList); //Connect le paso dos cosas el componente que voy a conectar y una función para extraer datos desde el estado
