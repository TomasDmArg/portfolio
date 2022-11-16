import React from "react";
import { Button, Group, TextInput, Textarea } from "@mantine/core";
import { IconAt, IconMail, IconUser } from "@tabler/icons";
export default function Landing() {
  return (
    <React.Fragment>
      <section className="contact">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__description">
          Si tenés alguna duda o querés contactarme, podés hacerlo a través de
          este formulario.
        </p>
        <form className="contact__form">
          <Group>
            <TextInput
              variant="filled"
              label="Nombre"
              placeholder="Ingrese su nombre"
              required
              className="contact__form__input"
              icon={<IconUser />}
            />
            <TextInput
              variant="filled"
              label="Email"
              placeholder="Ingrese su email"
              required
              className="contact__form__input"
              icon={<IconAt />}
            />
          </Group>
          <Textarea
            variant="filled"
            label="Mensaje"
            placeholder="Ingrese su mensaje"
            required
            className="contact__form__textarea"
            autosize="true"
          />
          <Button variant="filled" className="contact__form__button">
            Enviar
          </Button>
        </form>
      </section>
    </React.Fragment>
  );
}