import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard'; 
import _ from 'lodash';
const preparestateFromWord = (given_word) => {
    let word
}
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 const activate = () => {
 setActive(true)
 }
 const className = `card ${active ? 'activeCard': ''}`
 return (
 <div className={className} onClick={activate}>{props.value}</div>
 )

}