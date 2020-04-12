import React from 'react';
import Button from './Button';

import addIcon from '../assets/icons/add.svg';
import Textarea from './Textarea';

const TrelloCard = ({ text }) => {
    return (
        <div style={styles.cardWrapper}>
            <h3>{text}</h3>

        </div>
    )
}

const styles = {

    cardWrapper: {
        borderRadius: "3px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#fff",
        position: "relative",
        padding: "10px",
        cursor: "pointer",
        maxWidth: "250px",
        marginBottom: "7px",
        minWidth: "230px"
    }
}

export default TrelloCard;