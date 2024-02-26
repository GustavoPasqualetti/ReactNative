import { StatusBar } from "expo-status-bar"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { UserPicture } from "../../components/UserPicture/Style"
import { BoxInput } from "../../components/BoxInput"
import { Button, Button2 } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { useState } from "react"
import { ButtonEdit } from "./Style"

export const InsertRecord = () => {

    const [RecordEdit, setRecordEdit] = useState(true)

    return (
        <ContainerScroll>

            {RecordEdit ? (
                <>
                    <Container>

                        <UserPicture source={{ uri: "https://github.com/zAlves31.png" }} />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Descrição da consulta'
                            placeholder='O paciente possuí uma infecção no
                             ouvido. Necessário repouse de 2 dias
                             e acompanhamento médico constante'
                            fieldHeight={100}
                            multiline={true}

                        />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Diagnóstico do paciente'
                            placeholder='Infecção no ouvido'
                            fieldHeight={60}
                            multiline={true}
                        />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Prescrição médica'
                            placeholder='Medicamento: Advil
                            Dosagem: 50 mg
                            Frequência: 3 vezes ao dia
                            Duração: 3 dias'
                            fieldHeight={100}
                            multiline={true}
                        />

                        <Button>
                            <ButtonTitle>
                                SALVAR
                            </ButtonTitle>
                        </Button>

                        <Button2 onPress={() => setRecordEdit(false)}>
                            <ButtonTitle>
                                EDITAR
                            </ButtonTitle>
                        </Button2>

                    </Container>
                </>
            ) : (
                <>
                    <Container>

                        <UserPicture source={{ uri: "https://github.com/zAlves31.png" }} />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Descrição da consulta'
                            placeholder='O paciente possuí uma infecção no
                            ouvido. Necessário repouse de 2 dias
                            e acompanhamento médico constante'
                            fieldHeight={100}
                            multiline={true}
                            editable={true}
                        />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Diagnóstico do paciente'
                            placeholder='Infecção no ouvido'
                            fieldHeight={60}
                            multiline={true}
                            editable={true}
                        />
                        <BoxInput
                            fieldWidht={80}
                            textLabel='Prescrição médica'
                            placeholder='Medicamento: Advil
                            Dosagem: 50 mg
                            Frequência: 3 vezes ao dia
                            Duração: 3 dias'
                            fieldHeight={100}
                            multiline={true}
                            editable={true}
                        />

                        <ButtonEdit onPress={() => setRecordEdit(true)}>
                            <ButtonTitle>
                                SALVAR
                            </ButtonTitle>
                        </ButtonEdit>

                       

                    </Container>
                </>
            )}


        </ContainerScroll>

    )
}