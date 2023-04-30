import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ModalForm = ({ visible, onClose, children }) => {
  const [complianceModal, setComplianceModal] = useState(false);

  useEffect(() => {
    setComplianceModal(visible);
  }, [visible]);

  const handleClose = () => {
    setComplianceModal(false);
    onClose();
  };

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={complianceModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Ionicons name="close" size={30} color="#252F48" />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalForm;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .6)",
  },
  modalView: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
});
