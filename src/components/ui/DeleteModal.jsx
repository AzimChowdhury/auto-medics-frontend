import { Modal } from 'antd';


const DeleteModal = ({ title, subTitle, isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal width={'350px'} title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p style={{ padding: '10px 0px' }}>{subTitle}</p>
        </Modal>
    );
};

export default DeleteModal;