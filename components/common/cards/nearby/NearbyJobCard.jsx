import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {checkImageURL} from "../../../../utils"

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://as2.ftcdn.net/v2/jpg/05/05/61/73/1000_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}} resizeMode="contain" style={styles.logoImage}/>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text styles={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard