import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Colours } from '../commons/colours';

export function Note({id, title, text, date, color, isCompleted}) {
    const dateTransformed = new Date(date);
    return (
        
        <NoteContainer to={`/notes/${id}`}>
            <NoteHeader color={color} isCompleted={isCompleted}>
                <Title text={isCompleted ? 'line-through' : 'none'}> {title} </Title>
                {isCompleted && 
                <Archive primary={Colours.primary}>Make Actual</Archive>}
            </NoteHeader>
            <DateContainer> {dateTransformed.toLocaleString()} </DateContainer>
            <Text> {text}</Text>
        </NoteContainer>
        

    )
}


const NoteContainer = styled(Link)`
    display:block;
    text-decoration: none;
    /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); */
    background-color: ${Colours.stickyBackground};
    transition: all .3s ease;
    height: 150px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.9);
    }
        
`
const NoteHeader = styled.div`
    padding: 5px 0;
    border-radius: 10px 10px 0 0 ;
    border-bottom: 1px solid white;
    width: 100%;
    background-color: ${p => p.color};
    align-items: center;
    display: flex;
    justify-content: space-around;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 23px;
    color: #fff;
    text-align: center;
    text-decoration: ${p => p.text};
`

const Text = styled.div`
    margin-top: 15px;
    font-family: 'Arial';
    color: black;
    text-align: center;
    padding: 0 10px;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const DateContainer = styled.div`
    font-family: 'Arial';
    font-size: 12px;
    color: black;
    padding: 5px 0;
    line-height: 13px;
    border-bottom: 1px solid gray;
    margin: 0 10px;
`

const Archive = styled.button`
    font-family: Arial;
    font-size: 13px;
    padding: 5px; 
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
    transition: all .4s ease;
    &:hover {
        border-color: ${p => p.primary};
        color: ${p => p.primary};
    }
`