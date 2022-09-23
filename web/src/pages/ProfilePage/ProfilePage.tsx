import { css } from '@emotion/react'
import { Box, Center, FileButton, Grid } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import ImageCard from 'src/components/ImageCard/ImageCard'
import Tappable from 'src/components/Tappable/Tappable'

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
              key={image}
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
                      <Tappable
                        css={css`
                          height: 100%;
                          width: 100%;
                          opacity: 0.5;
                        `}
                        {...props}
                      >
                        ➕
                      </Tappable>
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
