import React, { useState } from 'react';
import Label from '../../shared/Form Elements/Label';
import TextField from '../../shared/Form Elements/TextField';
import TextArea from '../../shared/Form Elements/TextArea';
import * as u from './UpdateTourElements';
import toast from 'react-hot-toast';
import submitForm from '../../../hooks/submitForm';

const UpdateTour = ({ tour }) => {
  const [name, setName] = useState(tour?.name || 'not available');
  const [price, setPrice] = useState(tour?.price || 'not available');
  const [ageLimit, setAgeLimit] = useState(tour?.age_limit || 'not available');
  const [duration, setDuration] = useState(tour?.duration || 'not available');
  const [capacity, setCapacity] = useState(tour?.capacity || 'not available');
  const [highlights, setHighlights] = useState(
    tour?.highlights || 'not available'
  );
  const [includes, setIncludes] = useState(tour?.includes || 'not available');
  const [excludes, setExcludes] = useState(tour?.excludes || 'not available');

  const [guide_1, setGuide_1] = useState('');
  const [guide_2, setGuide_2] = useState('');
  const [guide_3, setGuide_3] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');
  const [locations, setLocations] = useState('');
  const [description, setDescription] = useState(
    tour?.description || 'not available'
  );
  const [coverImg, setCoverImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleCoverImg = (e) => {
    setCoverImg(e.target.files[0]);
    // let url = URL.createObjectURL(e.target.files[0]);
    //     url=url.replace('blob:', '');
    //     // setSingleImg(url);
    //     console.log({singleImg:new URL(url)});
  };
  const handleGalleryImages = (e) => {
    setGalleryImages(e.target.files);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();

    formData.append('tour_cover', coverImg);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('ageLimit', ageLimit);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('highlights', highlights);
    formData.append('includes', includes);
    formData.append('excludes', excludes);
    formData.append('locations', locations);

    for (const file of galleryImages) {
      formData.append('tour_gallery', file);
    }

    await toast.promise(
      submitForm(`/api/v1/tours/${tour._id}`, formData, 'patch', headers),
      {
        loading: 'Updating Tour...',
        success: (data) => {
          console.log({ data });
          return ` ${data.data.message} ` || 'success';
        },
        error: (err) => `${err.response.data.message}`,
      },
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      }
    );
  };
  return (
    <>
      <u.Container>
        <u.FormTitle>Update Tour</u.FormTitle>

        <u.Form onSubmit={onSubmit}>
          <u.FormGroup>
            <Label labelText={'Tour Name'} />
            <TextField
              value={name}
              setValue={setName}
              placeholder={'Update Name'}
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'Tour Price'} />
            <TextField
              value={price}
              setValue={setPrice}
              placeholder={'Update price'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Tour Cover'} />
            <input
              name='coverImg'
              onChange={handleCoverImg}
              type='file'
              placeholder={'Upload tour cover image here'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Tour Images'} />
            <input
              name='galleryImages'
              onChange={handleGalleryImages}
              multiple={true}
              type='file'
              placeholder={'Upload tour gallery images here'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Age Limit'} />
            <TextField
              value={ageLimit}
              setValue={setAgeLimit}
              type='text'
              placeholder={'Enter tour maximum age limit here'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Capacity'} />
            <TextField
              value={capacity}
              setValue={setCapacity}
              type='text'
              placeholder={'Enter maximum no of seats for this tour'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Duration'} />
            <TextField
              value={duration}
              setValue={setDuration}
              type='text'
              placeholder={'Enter tour duration here'}
            />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Start Date'} />
            <u.DateInput
              value={startDate}
              setValue={setStartDate}
              type={'date'}
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'End Date'} />
            <u.DateInput value={endDate} setValue={setEndDate} type={'date'} />
          </u.FormGroup>

          <u.FormGroup>
            <Label labelText={'Tour Includes'} />
            <TextArea
              value={includes}
              setValue={setIncludes}
              rows={10}
              placeholder='Enter Tour Includes here.
              EX: 
              Include 1, 
              Include 2,'
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'Tour Excludes'} />
            <TextArea
              value={excludes}
              setValue={setExcludes}
              rows={10}
              placeholder='Enter Tour excludes here.
              EX: 
              Exclude 1, 
              Exclude 2,'
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'Tour Highlights'} />
            <TextArea
              value={highlights}
              setValue={setHighlights}
              rows={10}
              placeholder='Enter Tour highlights here.
              EX: 
              highlight 1, 
              highlight 2,'
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'Tour Locations'} />
            <TextArea
              value={locations}
              setValue={setLocations}
              rows={10}
              placeholder='Enter coordinates of the locations here.
              EX:
              [latitude_1,longtitude_1] 
              [latitude_2,longtitude_2] 
              [latitude_3,longtitude_3] 

              '
            />
          </u.FormGroup>
          <u.FormGroup>
            <Label labelText={'Tour Description'} />
            <TextArea
              value={description}
              setValue={setDescription}
              rows={10}
              placeholder='Enter tour description here'
            />
          </u.FormGroup>

          <u.FormGroup>
            <u.SubmitBtn type='submit'>Update Tour</u.SubmitBtn>
            <u.SubmitBtn color='#333' type='reset'>
              Clear
            </u.SubmitBtn>
          </u.FormGroup>
        </u.Form>
      </u.Container>
    </>
  );
};

export default UpdateTour;
