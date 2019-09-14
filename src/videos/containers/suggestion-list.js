import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString(); //Anexar la key a la lista, la key tiene que ser texto y la extraigo del item
  renderEmpty = () => <Empty text="No hay sugerencias"></Empty>;
  itemSepartor = () => <Separator color="red" />;
  rendItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  render() {
    /* const list = [
      {
        title: 'Avernges',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      },
    ]; */
    //console.log(list[0].title);
    return (
      <Layout title="Recomendado para ti">
        {/* Recibe una función que puede renderizar un componente */}
        <FlatList
          //Hay que agregar el keyExtractor cada ves que hay una lista de elemento que no tenga un key a dentro por no ser parte del api
          keyExtractor={this.keyExtractor} //Propiedad del FlatList, envio de key a mi componente flatlist un elemento que sea unico dentro de cada uno de los componentes
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSepartor}
          renderItem={this.rendItem}
        />
        {/*Saco el key item de la lista que viene completa*/}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default SuggestionList;
