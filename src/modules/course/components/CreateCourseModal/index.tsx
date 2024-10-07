import React, { useState } from 'react';
import { Modal, Input, Button } from '@ant-design/react-native';
import { StyleSheet, View } from 'react-native';

interface ICreateCourseModalProps {
  visible: boolean;
  onClose: () => void;
}

const CreateCourseModal: React.FC<ICreateCourseModalProps> = ({ visible, onClose }) => {
  const [courseName, setCourseName] = useState('');

  const handleSubmit = () => {
    console.log(courseName);
    setCourseName('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Input
          placeholder="Enter course name"
          value={courseName}
          onChangeText={setCourseName}
          style={styles.input}
        />
        <Button type="primary" onPress={handleSubmit}>
          Create Course
        </Button>
        <Button type="warning" onPress={onClose}>
          Cancel
        </Button>
      </View>
    </Modal>
  );
};

export default CreateCourseModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 15
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 5
  },
});
