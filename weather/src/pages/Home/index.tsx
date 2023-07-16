import {type FC, useEffect, useState} from "react";
import Button from "../../shared/ui/Button";
import SectionContainer, { Section } from "../../shared/ui/Section";
import { useGetByCityQuery, weatherGeoApi } from "../../entities/Weather/api";
import Input from "../../shared/ui/Input";
import WeatherSearch from "../../features/Weather/Search";
import { weatherStore } from "../../shared/api/weather";

interface IHomeProps {
    title?: string;
}

const Home: FC<IHomeProps> = ({ title = "Weather" }) => {
    const { data, error, isLoading } = useGetByCityQuery('London')
    
    return (
        <>
            <main onClick={() => console.log(data)}>
                <Section title={title}>
                    <SectionContainer>
                        <WeatherSearch/>
                        {isLoading ? 'Loading...' : 
                            <ul>
                                {data?.map((item, index) => 
                                    <li key={item.lat + item.lon}>
                                        <div>
                                            <h3>{item.name} <small>[{item.state}]</small></h3>
                                            <b>{item.lat} / {item.lon}</b>
                                        </div>
                                        <hr/>
                                        <br />
                                    </li>
                                )}
                            </ul>
                        }
                    </SectionContainer>
                </Section>
            </main>
        </>
    );
};

export default Home;
