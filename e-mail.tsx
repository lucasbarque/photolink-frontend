import * as React from 'react';

import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="156"
      height="36"
      fill="none"
      viewBox="0 0 155 35"
    >
      <path
        fill="#66C6BA"
        d="M24.385 15.055h-3.216a1.345 1.345 0 01-1.002-.45l-1.534-1.724a2.565 2.565 0 00-1.915-.86H9.143a2.565 2.565 0 00-1.916.88l-1.534 1.724a1.344 1.344 0 01-1.002.45H2.566A2.566 2.566 0 000 17.64V32.37a2.566 2.566 0 002.566 2.565h21.819a2.566 2.566 0 002.565-2.565V17.645a2.566 2.566 0 00-2.565-2.59zm1.344 17.29a1.344 1.344 0 01-1.344 1.343H2.565a1.344 1.344 0 01-1.343-1.344V17.645a1.344 1.344 0 011.344-1.344h2.12a2.567 2.567 0 001.916-.86l1.534-1.725a1.345 1.345 0 011.002-.45h7.58a1.346 1.346 0 011.001.45l1.535 1.725a2.564 2.564 0 001.915.86h3.216a1.344 1.344 0 011.344 1.344v14.7z"
      ></path>
      <path
        fill="#66C6BA"
        d="M13.155 20.92a3.699 3.699 0 100 7.397 3.699 3.699 0 000-7.398zm0 6.171a2.478 2.478 0 110-4.955 2.478 2.478 0 010 4.955z"
      ></path>
      <path
        fill="#66C6BA"
        d="M13.155 18.76a5.864 5.864 0 100 11.728 5.864 5.864 0 000-11.729zm0 10.481a4.633 4.633 0 114.633-4.632 4.637 4.637 0 01-4.633 4.618v.014zM22.127 17.25a2.12 2.12 0 100 4.241 2.12 2.12 0 000-4.242zm0 3.024a.899.899 0 110-1.798.899.899 0 010 1.798zM22.127 24.257a.767.767 0 100-1.535.767.767 0 000 1.535zM9.412 3.273H8.259v1.154h1.153V3.273zM9.412 5.629H8.259v1.153h1.153V5.629zM31.231 3.273h-1.153v1.154h1.153V3.273zM31.231 5.629h-1.153v1.153h1.153V5.629zM31.231 7.98h-1.153v1.152h1.153V7.98zM31.231 10.33h-1.153v1.153h1.153V10.33zM31.231 17.386h-1.153v1.153h1.153v-1.153zM31.231 19.737h-1.153v1.153h1.153v-1.153zM31.231 22.092h-1.153v1.153h1.153v-1.153zM31.231 24.442h-1.153v1.154h1.153v-1.154z"
      ></path>
      <path
        fill="#66C6BA"
        d="M33.958 14.16V2.233a2.17 2.17 0 00-2.17-2.17H7.516a2.17 2.17 0 00-2.17 2.17v7.702a.61.61 0 001.222 0V2.232a.948.948 0 01.948-.948h3.303v8.308a.611.611 0 001.222 0V1.284h15.056v11.01a.61.61 0 101.222 0V1.284h3.47a.948.948 0 01.947.948v11.523h-4.818a.61.61 0 100 1.222h4.818v11.528a.948.948 0 01-.948.948h-2.8a.61.61 0 100 1.221h2.8a2.17 2.17 0 002.17-2.17V14.567a.532.532 0 000-.415v.01zM43.776 9.263h8.376c1.328 0 2.392.376 3.192 1.128.816.736 1.224 1.72 1.224 2.952v2.4c0 1.296-.432 2.344-1.296 3.144-.848.784-1.976 1.176-3.384 1.176h-5.832v6h-2.28v-16.8zm8.064 8.784c.736 0 1.328-.216 1.776-.648.448-.448.672-1.032.672-1.752v-2.28c0-.624-.2-1.128-.6-1.512-.4-.384-.928-.576-1.584-.576h-6.048v6.768h5.784zm7.027-8.784H61.1v6.336a4.1 4.1 0 011.392-1.224c.56-.32 1.111-.48 1.655-.48h1.632c1.153 0 2.08.384 2.785 1.152.72.768 1.08 1.776 1.08 3.024v7.992H67.41V18.07c0-.656-.168-1.184-.504-1.584a1.615 1.615 0 00-1.32-.624h-1.535c-.689 0-1.313.264-1.873.792-.56.512-.92 1.184-1.08 2.016v7.392h-2.231v-16.8zM77.06 26.255c-1.408 0-2.544-.424-3.408-1.272-.848-.848-1.272-1.96-1.272-3.336v-3.12c0-1.392.432-2.512 1.296-3.36.864-.848 2.008-1.272 3.432-1.272h2.016c1.424 0 2.568.424 3.432 1.272.864.848 1.296 1.968 1.296 3.36v3.12c0 1.376-.44 2.488-1.32 3.336-.864.848-2.008 1.272-3.432 1.272h-2.04zm2.016-1.968c.768 0 1.384-.248 1.848-.744.464-.496.696-1.16.696-1.992v-2.952c0-.832-.232-1.496-.696-1.992-.448-.496-1.048-.744-1.8-.744h-2.016c-.752 0-1.36.248-1.824.744-.448.496-.672 1.16-.672 1.992v2.952c0 .832.224 1.496.672 1.992.448.496 1.048.744 1.8.744h1.992zm12.39 1.776c-1.312 0-2.264-.288-2.856-.864-.576-.576-.864-1.504-.864-2.784V16.03h-2.112v-1.944h2.136v-3.624h2.208v3.624h3.12v1.944h-3.12v6.336c0 .624.12 1.072.36 1.344.256.272.664.408 1.224.408h1.536v1.944h-1.632zm8.328.192c-1.408 0-2.544-.424-3.408-1.272-.848-.848-1.272-1.96-1.272-3.336v-3.12c0-1.392.432-2.512 1.296-3.36.864-.848 2.008-1.272 3.432-1.272h2.016c1.424 0 2.568.424 3.432 1.272.864.848 1.296 1.968 1.296 3.36v3.12c0 1.376-.44 2.488-1.32 3.336-.864.848-2.008 1.272-3.432 1.272h-2.04zm2.016-1.968c.768 0 1.384-.248 1.848-.744.464-.496.696-1.16.696-1.992v-2.952c0-.832-.232-1.496-.696-1.992-.448-.496-1.048-.744-1.8-.744h-2.016c-.752 0-1.36.248-1.824.744-.448.496-.672 1.16-.672 1.992v2.952c0 .832.224 1.496.672 1.992.448.496 1.048.744 1.8.744h1.992zm9.579 1.776c-.56 0-1.008-.16-1.344-.48-.32-.32-.48-.752-.48-1.296V9.263h2.28v14.784h9.12v2.016h-9.576zm13.304-13.56c-.464 0-.84-.136-1.128-.408-.288-.288-.432-.656-.432-1.104 0-.448.144-.808.432-1.08.288-.288.664-.432 1.128-.432.464 0 .832.144 1.104.432.288.272.432.632.432 1.08 0 .448-.144.816-.432 1.104-.272.272-.64.408-1.104.408zm-1.128 1.584h2.232v11.976h-2.232V14.087zm6.013 0h2.136v1.656a4.078 4.078 0 011.392-1.32c.592-.352 1.176-.528 1.752-.528h1.584c1.152 0 2.08.384 2.784 1.152.72.768 1.08 1.776 1.08 3.024v7.992h-2.232V18.07c0-.656-.168-1.184-.504-1.584a1.615 1.615 0 00-1.32-.624h-1.488c-.688 0-1.312.264-1.872.792s-.92 1.216-1.08 2.064v7.344h-2.232V14.087zm22.106 11.976l-4.368-5.376-1.56 1.536v3.84h-2.232v-16.8h2.232v10.32l5.544-5.496h2.664l-5.184 5.136 5.496 6.84h-2.592z"
      ></path>
    </svg>
  );
}

export const StripeWelcomeEmail = () => (
  <Tailwind
    config={{
      theme: {
        fontFamily: {
          'work-sans': [
            'Work Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Ubuntu',
            'sans-serif',
          ],
        },
        colors: {
          white: '#FFFFFF',
          black: '#0C0E0F',
          gray: {
            100: '#F9FAFB',
            200: '#E5E7EB',
            400: '#9CA3AF',
          },
          esmerald: {
            500: '#66C6BA',
          },

          slate: {
            700: '#334155',
          },
        },
        fontSize: {
          'display-1': [
            '5.5rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'display-2': [
            '4.5rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'display-3': [
            '3.5rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'heading-1': [
            '3rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'heading-2': [
            '2.5rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'heading-3': [
            '2rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'title-medium': [
            '1.625rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'title-semibold': [
            '1.625rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'subtitle-regular': [
            '1.375rem',
            {
              lineHeight: '150%',
              fontWeight: 400,
              letterSpacing: '0px',
            },
          ],
          'subtitle-medium': [
            '1.375rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'subtitle-semibold': [
            '1.375rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'body-1-regular': [
            '1.125rem',
            {
              lineHeight: '150%',
              fontWeight: 400,
              letterSpacing: '0px',
            },
          ],
          'body-1-medium': [
            '1.125rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'body-1-semibold': [
            '1.125rem',
            {
              lineHeight: '130%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'body-2-regular': [
            '1rem',
            {
              lineHeight: '150%',
              fontWeight: 400,
              letterSpacing: '0px',
            },
          ],
          'body-2-medium': [
            '1rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'body-2-semibold': [
            '1rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'body-3-regular': [
            '0.875rem',
            {
              lineHeight: '150%',
              fontWeight: 400,
              letterSpacing: '0px',
            },
          ],
          'body-3-medium': [
            '0.875rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'body-3-semibold': [
            '0.875rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
          'small-regular': [
            '0.75rem',
            {
              lineHeight: '150%',
              fontWeight: 400,
              letterSpacing: '0px',
            },
          ],
          'small-medium': [
            '0.75rem',
            {
              lineHeight: '150%',
              fontWeight: 500,
              letterSpacing: '0px',
            },
          ],
          'small-semibold': [
            '0.75rem',
            {
              lineHeight: '150%',
              fontWeight: 600,
              letterSpacing: '0px',
            },
          ],
        },
      },
    }}
  >
    <Html>
      <Head>
        <Font
          fontFamily="Work Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/worksans/v18/QGYsz_wNahGAdqQ43Rh_fKDp.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Work Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/worksans/v18/QGYsz_wNahGAdqQ43Rh_fKDp.woff2',
            format: 'woff2',
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Preview>You're now ready to make live transactions with Stripe!</Preview>

      <Body className="bg-gray-100 font-work-sans">
        <Container
          // style={{ border: "1px solid black" }}
          className="mt-20 rounded-lg border border-solid border-gray-400/40 bg-white p-14"
        >
          <Section>
            <Section className="h-9 text-center">
              <Icon />
            </Section>
            <Text className="text-center text-subtitle-regular text-slate-700">
              Redefinição de senha
            </Text>
            <Text className="text-center text-small-regular text-gray-400">
              Olá <span className="text-slate-700">Lucas Barque</span>, para
              trocar sua senha, clique no botão abaixo e defina uma nova senha
              para acessar sua conta.
            </Text>
            <Button
              className="mx-auto block w-fit rounded-lg bg-esmerald-500 px-5 py-[10px] text-white"
              href="https://dashboard.stripe.com/login"
            >
              {' '}
              Redefinir senha
            </Button>
            <Text className="text-center text-small-regular text-gray-400">
              Caso não consiga acessar pelo botão, copie e cole o link abaixo em
              seu navegador:
            </Text>
            <Link
              className="mx-auto block w-full text-center text-small-regular text-esmerald-500"
              href="https://photolink.com/recuperar-minha-conta/9239248234"
            >
              https://photolink.com/recuperar-minha-conta/9239248234
            </Link>
            <Hr className="mt-4" />
            <Text className="text-center text-body-2-regular text-slate-700 ">
              Equipe PhotoLink
            </Text>
            <Text className="text-center text-small-regular text-gray-400">
              Caso não tenha solicitado, desconsidere esta mensagem.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default StripeWelcomeEmail;
