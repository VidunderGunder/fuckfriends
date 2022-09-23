import { css } from '@emotion/react'
import {
  ActionIcon,
  Box,
  Button,
  Center,
  FileButton,
  Grid,
} from '@mantine/core'
import { FaPlus } from 'react-icons/fa'

import { MetaTags } from '@redwoodjs/web'

import ImageCard from 'src/components/ImageCard/ImageCard'

const Profile = ({
  images = [
    '/examples/1.jpg',
    '/examples/2.jpg',
    '/examples/3.jpg',
    '/examples/4.jpg',
  ],
}: {
  images?: string[]
}) => {
  const [files, setFiles] = React.useState<File[]>(Array.from({ length: 9 }))
  images = [
    ...images,
    ...Array.from({ length: 9 - images.length }, () => undefined),
  ]
  files.forEach((file, index) => {
    if (file) {
      images[index] = URL.createObjectURL(file)
    }
  })

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <Box
        css={css`
          display: flex;
          height: 100%;
          width: 100%;
        `}
      >
        <Grid
          css={css`
            width: 100%;
          `}
        >
          {images?.map((image, i) => (
            <Grid.Col
              key={image ?? i}
              css={css`
                height: calc(100% / 3);
              `}
              span={4}
            >
              <ImageCard src={image}>
                {image === undefined ? (
                  <FileButton
                    onChange={(file) => {
                      setFiles((files) => {
                        const newFiles = [...files]
                        newFiles[i] = file
                        return newFiles
                      })
                    }}
                    accept="image/png,image/jpeg"
                  >
                    {(props) => (
                      <ActionIcon
                        css={css`
                          height: 100%;
                          width: 100%;
                          font-size: 1.25rem;
                        `}
                        {...props}
                      >
                        <FaPlus opacity={0.375} />
                      </ActionIcon>
                    )}
                  </FileButton>
                ) : null}
              </ImageCard>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Profile
