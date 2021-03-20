import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', //como se van a distrbuir los elementos, por row
    marginBottom: 1,
    padding: 10,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 0,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
    color: 'white'
  },
 
  itemImageDet: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  male: {
    backgroundColor: '#778beb',
  },
  female: {
    backgroundColor: '#f8a5c2',
  },
});
