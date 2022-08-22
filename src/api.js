import axios from 'axios'

export const getPlanData = () =>
  axios.get('http://localhost:3000/admin_user/plans/')

export const getSubscriptionData = () =>
  axios.get('http://localhost:3000/admin_user/subscriptions')

export const getFeatureData = () =>
  axios.get('http://localhost:3000/admin_user/features')

export const postPlanData = (name, feature_ids) =>
  axios.post('http://localhost:3000/admin_user/plans', { name, feature_ids })

export const deletePlanData = (id) =>
  axios.delete(`http://localhost:3000/admin_user/plans/${id}`)
