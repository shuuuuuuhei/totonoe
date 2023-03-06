import React from 'react'


import { User } from '../../@types/User';
import { Modal } from '@mui/material';

type FollowUserModalProps = {
    isOpenModal: boolean,
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    modalTitle: string,
    userList: User[] | undefined,
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

const modalStyle: React.CSSProperties = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'white',
    border: '2px solid #000',
};

export const FollowUserModal: React.VFC<FollowUserModalProps> = (props) => {

    return (
        <div>
            <Modal
                open={props.isOpenModal}
                onClose={() => props.setIsOpenModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} >
                    <h2 id="simple-modal-title" className="text-center border-bottom py-4">{props.modalTitle}</h2>
                    <div id="simple-modal-description" className="py-4 px-2">
                        {props.userList ?
                            <ul>
                                {props.userList.map((user, index) => {
                                    return (
                                        <li id={index.toString()} className="py-2 border-bottom">
                                            <a href={`/profile/${user.user_id}/`}><p>{user.name}</p></a>
                                        </li>
                                    )
                                })}
                            </ul>
                            :
                            <div className="text-center">
                                {props.modalTitle}なし
                            </div>
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
}