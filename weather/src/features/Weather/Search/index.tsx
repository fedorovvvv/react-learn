import * as React from "react";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import "./index.sass";
import { weatherGeoApi } from "../../../entities/Weather/api";
import { weatherStore } from "../../../shared/api/weather";
import { useDispatch } from "react-redux";
import { addCity } from "../../../entities/Weather/model";

interface IWeatherSearchProps {
    disabled?: boolean;
}

const WeatherSearch: React.FunctionComponent<IWeatherSearchProps> = ({
    disabled,
}) => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
  
    const handler = {
        submit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            addCity([])
            // dispatch(addCity())
            console.log(weatherStore.getState())
            console.log("submit", e);
        },
        onInput(e: React.FormEvent<HTMLInputElement>) {
            setValue(e.currentTarget.value)
        },
    };

    return (
        <form className="WeatherSearch" onSubmit={handler.submit.bind(handler)}>
            <Input
                onInput={handler.onInput.bind(handler)}
                value={value}
                disabled={disabled}
            />
            <Button disabled={disabled}>Add</Button>
        </form>
    );
};

export default WeatherSearch;
