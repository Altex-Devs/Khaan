import Loading from "@/app/loading";
import { db } from "@/firebase/firebase";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    useDisclosure
} from "@chakra-ui/react";
import { collection, documentId, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Modale = ({ onButtonClick, docId }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen();
        fetchData(docId);
    }, [onButtonClick]);

    const [hData, setHdata] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [itemLength, setItemLength] = useState(0);

    const fetchData = async (docId: string) => {
        try {
            const citizensRef = query(collection(db, "citizens"), where(documentId(), "==", docId));
            let data: any = {};
            await getDocs(citizensRef).then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    console.log("Doc detail: ", doc.data());
                    data = doc.data();
                })
                setItemLength(data.items.length);
                setHdata(data);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false)
        }
    };

    const updateData = () => {

    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                {loading ? <Loading /> : (
                    <ModalContent style={{ backgroundColor: "#f4f4f4", color: "#444444", padding: 20, border: 2 }}>
                        <ModalHeader>{hData.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input placeholder='Title' value={hData.title} />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Title2</FormLabel>
                                <Input placeholder='Title2' value={hData.title2} />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Title Card</FormLabel>
                                <Input placeholder='TitleCard' value={hData.titleCard} />
                            </FormControl>
                            <FormControl >
                                <FormLabel>Type</FormLabel>
                                <Select placeholder="Select option" value={hData.type}>
                                    <option value="heal">Health</option>
                                    <option value="prop">Property</option>
                                    <option value="liab">Liability</option>
                                    <option value="fin">Financial</option>
                                </Select>
                            </FormControl>
                            <div>
                                <FormControl style={{ marginTop: 10 }}>
                                    <Input placeholder="Subtitle" value={hData.items[0]?.subtitle} />
                                </FormControl>
                                <FormControl style={{ marginTop: 10 }}>
                                    <Input placeholder="Body" value={hData.items[0]?.body} />
                                </FormControl>
                                <FormControl style={{ marginTop: 10 }}>
                                    <Input placeholder="Subbody" value={hData.items[0]?.subbody} />
                                </FormControl>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            {docId ? (<Button onClick={updateData} type="submit" style={{ backgroundColor: '#4c88ff' }}>
                                Save
                            </Button>) : (<Button onClick={updateData} type="submit" style={{ backgroundColor: '#4c88ff' }}>
                                Create
                            </Button>)}
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                )}
            </Modal>
        </>
    )
}