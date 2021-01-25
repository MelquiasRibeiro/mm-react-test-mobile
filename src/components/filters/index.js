import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

import {
    Wrapper,
    Container,
    Title,
    FiltersContainer,
    PickerStyle,
    PriceInput,
} from "./styles";

const Filters = ({ setFilters }) => {
    const [locales, setLocales] = useState([]);
    const [selectedLocale, setSelecteLocale] = useState(0);
    const [countries, setCountries] = useState([]);
    const [selectecountry, setSelectecountry] = useState(0);
    const [name, setName] = useState("");
    const [erro, setError] = useState();

    useEffect(() => {
        axios
            .get("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
            .then((response) => {
                setLocales(response.data.filters[0].values);
                setCountries(response.data.filters[1].values);
            })
            .catch((error) => {
                setError(error);
                alert(
                    `por favor, recarregue a página, houve um erro ERROR:${erro}`
                );
            });
    }, [erro]);

    function formatParams() {
        const params = `?${selectedLocale}?${selectecountry}`;
        setFilters(params);
    }

    useEffect(() => {
        formatParams();
    }, [selectedLocale, selectecountry]);
    return (
        <Wrapper>
            <Container>
                <Title>Filters</Title>
                <PriceInput
                    value={name}
                    onChangeText={(searchedName) => setName(searchedName)}
                />
                <FiltersContainer>
                    <PickerStyle>
                        <Picker
                            style={{
                                height: 40,
                                color: "#c4c4c4",
                            }}
                            onValueChange={(itemValue) =>
                                setSelecteLocale(itemValue)
                            }
                        >
                            <Picker.Item label="Select a locale" value />
                            {locales.map((locale) => (
                                <Picker.Item
                                    label={locale.name}
                                    key={locale.name}
                                    value={locale.value}
                                />
                            ))}
                        </Picker>
                    </PickerStyle>
                    <PickerStyle>
                        <Picker
                            style={{
                                height: 40,
                                color: "#c4c4c4",
                            }}
                            onValueChange={(itemValue) =>
                                setSelectecountry(itemValue)
                            }
                        >
                            <Picker.Item label="Select a county" value />
                            {countries.map((country) => (
                                <Picker.Item
                                    key={country.name}
                                    label={country.name}
                                    value={country.value}
                                />
                            ))}
                        </Picker>
                    </PickerStyle>
                </FiltersContainer>
            </Container>
        </Wrapper>
    );
};
export default Filters;
