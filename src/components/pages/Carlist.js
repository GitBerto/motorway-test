import React, { useState } from 'react';
import Card from '../content/Card';
import UserForm from '../forms/UserForm';
import themeStyles from '../../styles/theme.module.css';
import Modal from 'react-modal';

const modalContentStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden'
    },
  };

const CarList = ({images}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState();

    const closeModal = () => {
        setIsOpen(false);
    }
    
    const openModal = (content) => {
        setIsOpen(true);
        setModalContent(content);
    }

    return (
        <>
            <div className={themeStyles.mainContent}>
            <h2 className={themeStyles.h2}>Motorway posts</h2>
            <article className={themeStyles.article} role="article">
                {
                images && images.map(img => (
                    <div key={img.id} >
                    <Card data={img} openModal={openModal}/>
                    </div>
                ))
                }
            </article>
            </div>
            <section className={themeStyles.asideContent}>
                <div>
                <h3>User form</h3>
                <UserForm />
                </div>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalContentStyle}
            >
                <div className={themeStyles.modalContent}>
                    {modalContent}
                </div>
            </Modal>
        </>
    );
}

export default CarList;