import * as React from 'react';

import { SearchBar } from 'react-native-elements';

export default SearchBarInput = (props) => {
    return (
        <SearchBar
        placeholder="Search"
        lightTheme={ true }
        onChangeText={null}
        round={ true }
        value={null}
        containerStyle= {{ backgroundColor: 'white', marginBottom: -4, borderTopWidth: 0,
                           marginLeft: 5, marginRight: 5}}
        inputContainerStyle={{backgroundColor: '#eeeeee', paddingTop: 1}}
      />
    )
}