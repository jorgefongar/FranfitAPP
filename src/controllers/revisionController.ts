import { getRevisiones, getUserById } from '../services/apiService';

export const fetchRevisionesWithUsers = async () => {
  try {
    const revisiones = await getRevisiones();
    const revisionesWithUser = await Promise.all(
      revisiones.map(async (revision) => {
        const user = await getUserById(revision.user_id);
        return {
          ...revision,
          user
        };
      })
    );
    return revisionesWithUser;
  } catch (error) {
    console.error('Error fetching revisiones with users:', error);
    throw error;
  }
};
